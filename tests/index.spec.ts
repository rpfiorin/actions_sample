import { test, expect } from '@playwright/test'
import { visitWebMovies } from './support/helpers'

import { MoviesPage } from './support/pages/movies/index'
import { CartPage } from './support/pages/cart/purchase'

import { MovieModel } from './fixtures/movie.model'
// carrega arquivo da massa de teste definida
import data from './fixtures/movie.json'

// variaveis de instancia
let moviesPage: MoviesPage
let cartPage: CartPage

test.beforeEach(({ page }) => {
    // Usa POM    
    moviesPage = new MoviesPage(page)
    cartPage = new CartPage(page)
})

/**
 * @test fluxo de pedido no e-commerce
 * @precondition ter a massa de teste definida e visitar a home com navegador suportado
 * @steps
 *  1. visita a home e clica no botao de adicionar ao carrinho no respectivo filme a testar
 *  2. redireciona para o carrinho
 *  3. finaliza o pedido
 * @expected filme escolhido presente no carrinho, exibindo mensagem de sucesso ao finalizar
 */
test.describe('CN07 - Fechamento de pedido via listagem de filmes', () => {
    test('[WF-07] Finalizar pedido após adicionar filme ao carrinho', async ({ page }) => {
        const movie = data.success_order as MovieModel

        await visitWebMovies(page)
        await moviesPage.addMovie(page, movie.name)

        await expect(cartPage.checkAddedMovie(page, movie.name)).toBeVisible();
        await cartPage.buyMovies(page)

        await expect(cartPage.sucessOrderMessage(page)).toBeVisible();
    })
})
