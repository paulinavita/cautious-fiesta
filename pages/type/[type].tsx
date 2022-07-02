// @ts-nocheck
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from "next/router"
import { Grid, Box, Container, TablePagination } from '@mui/material'
import useFetch from '@hooks/useFetch'
import getTypeColor from '@utils/getTypeColor'
import { Doughnut, Layout, Loader } from '@components/Common'
import { TypeDetail, PokemonInfo } from "interfaces"
import TypeList from '@components/Type/TypeList'
import Sidebar from '@components/Type/Sidebar'
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
  right: '-31vw',
  zIndex: -1,
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
  const { data, error, loading: currentTypePokemonLoading } = useFetch<TypeDetail>(`/type/${currentType}`);

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
  }, [isReady, data, typeList, currentType, query.type])

  return (
    <Layout>
      <Container sx={{position: 'relative' }} maxWidth="md">
        <Doughnut color={currentColor} css={donatLeft} border={'16vh'}/>
        <Doughnut color={currentColor} css={donatRight} border={'16vh'}/>
        <Grid pt={3} container justifyContent="flex-start" spacing={3}>
          <Grid item xs={2}>
            <Sidebar types={typeList?.results} />
          </Grid>
          <Grid item xs={10}>
            {
              currentTypePokemonLoading
                ? <Loader />
                : (<TypeList pokemons={data?.pokemon}></TypeList>)
            }
          </Grid>
        </Grid>

        {/* <TablePagination></TablePagination> */}
      </Container>
    </Layout>
  )

}

export default TypeHome