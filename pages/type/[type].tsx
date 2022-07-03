// @ts-nocheck
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useMemo } from 'react'
import Router, { useRouter } from "next/router"
import { Grid, Box, Container, TablePagination, Pagination, Typography } from '@mui/material'
import useFetch from '@hooks/useFetch'
import getTypeColor from '@utils/getTypeColor'
import { Doughnut, Layout, Loader } from '@components/Common'
import { TypeDetail } from "interfaces"
import Sidebar from '@components/Type/Sidebar'
import TypeList from '@components/Type/TypeList'

import { css } from '@emotion/react'

const donatLeft = css({
  position: 'absolute',
  top: 230,
  left: '-33vw',
  zIndex: -1,
  borderRadius: '55vh',
  height: '55vh',
  width: '55vh',
})

const donatRight = css({
  position: 'absolute',
  top: 150,
  right: '-22vw',
  zIndex: -2,
  borderRadius: '55vh',
  height: '55vh',
  width: '55vh',
})

export type SidebarProps = {
  results: TypeDetail[]
}

const TypeHome: FC = () => {
  const { query, isReady } = useRouter()
  const [currentType, setCurrentType] = useState('')
  const [currentColor, setCurrentColor] = useState('')
  const { data: typeList } =  useFetch<SidebarProps>(`/type`)
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const { data, error, loading: currentTypePokemonLoading } = useFetch<TypeDetail>(`/type/${currentType}`);

  const getPageCount = () => {
    return Math.ceil(data?.pokemon?.length / rowsPerPage)
  }

  const currentData = useMemo(() => {
    const firstPageIndex = ((page <= 0 ? 0 : page - 1)) * rowsPerPage
    const lastPageIndex = firstPageIndex + rowsPerPage
    return data?.pokemon?.slice(firstPageIndex, lastPageIndex)
  }, [page, rowsPerPage, data])

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  }

  const handleCurrentType = () => {
    if (query.type !== '') {
      setCurrentType((String(query.type)))
    } else {
      setCurrentType('normal')
    }
    setCurrentColor(getTypeColor(currentType))
  }

  useEffect(() => {
    if (!isReady) return

    const { pathname } = Router
    if (pathname == '/' ){
      Router.push('/type/normal')
    }
    handleCurrentType()
    getPageCount()
  }, [isReady, data, typeList, currentType, query.type])

  return (
    <Layout>
      <Container sx={{ position: 'relative' }} maxWidth="md">
        <Doughnut color={currentColor} css={donatLeft} border={'16vh'}/>
        <Doughnut color={currentColor} css={donatRight} border={'16vh'}/>
        <Grid pt={3} container justifyContent="flex-start" spacing={3}>
          <Grid item xs={2}>
            <Sidebar results={typeList?.results} />
          </Grid>
          <Grid item xs={10}>
            {
              currentTypePokemonLoading
                ? <Loader />
                : (<TypeList pokemons={currentData}></TypeList>)
            }
          </Grid>

        </Grid>
        {
          data?.pokemon?.length &&
            <Box 
              display={'flex'}
              justifyContent={'space-between'} 
              alignContent={'center'}
              sx={{ mt: 4 }}
            >
              <TablePagination
                className="TypeHomeTPagination"
                component="div"
                count={page <= 0 ? 0 : getPageCount()}
                page={page}
                labelRowsPerPage={'Per Page'}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10]}
                onPageChange={() => {}}
                onRowsPerPageChange={handleChangeRowsPerPage}
              ></TablePagination>
              <Pagination
                className="TypeHomePagination"
                count={getPageCount()}
                variant="outlined"
                shape="rounded"
                onChange={handleChangePage}
              />
              <Typography sx={{ fontWeight: '700', pt: 1 }} color={currentColor}>Totals: {data?.pokemon?.length}</Typography>
            </Box>
        }
      </Container>
    </Layout>
  )

}

export default TypeHome