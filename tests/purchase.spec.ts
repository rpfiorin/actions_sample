import { test, expect } from '@playwright/test'
import { visitCart, newPrice } from './support/helpers'

import { CartPage } from './support/pages/cart/purchase'
import { MoviesPage } from './support/pages/movies/index'

import { MovieModel } from './fixtures/movie.model'
import data from './fixtures/movie.json'

// variaveis de instancia
let cartPage: CartPage
let moviesPage: MoviesPage
// constante para massa de teste
const movie = data.success_order as MovieModel

test.beforeEach(({ page }) => {
    // usa POM    
    cartPage = new CartPage(page)
    moviesPage = new MoviesPage(page)
    // visita carrinho por padrao
    visitCart(page)
})

/**
 * @test exclusao de filme
 * @precondition ter a massa de teste definida
 * @steps
 *  1. verifica se carrinho esta vazio, caso contrario, realiza a exclusao por meio da lixeira
 *  2. se vazio, adiciona algum filme e redireciona ao carrinho
 *  3. clica no botao ' - '
 * @expected filme excluido
 */
test.describe('CN09 - Decremento/exclusão de filme adicionado', () => {
    test.only('[WF-09] Decrementar ou excluir filme do carrinho', async ({ page }) => {
        if (! await cartPage.productText(page).isVisible()) {
            await moviesPage.addMovie(page, movie.name)

            await cartPage.decreaseMovie(page, false)


        }
        else {
            await cartPage.decreaseMovie(page, true)
            // colocar assert de texto 'Parece que não há nada por aqui :('
        }
    })
})

/**
 * @test incremento de filme
 * @precondition ter a massa de teste definida
 * @steps
 *  1. adiciona algum filme e redireciona ao carrinho
 *  2. clica no botao ' + '
 *  3. valida preco recalculado
 * @expected filme com quantia incrementada
 */
test.describe('CN10 - Incremento da quantia de filme adicionado', () => {
    test.only('[WF-10] Incrementar quantia do filme adicionado', async ({ page }) => {
        await moviesPage.addMovie(page, movie.name)

        await cartPage.increaseMovie(page)
        const updatedPrice = newPrice(movie.price, 2)

        await expect(cartPage.checkTotalValue(page, updatedPrice)).toBeVisible();
    })
})
