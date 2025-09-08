import { Page } from "@playwright/test"

// POM do carrinho de compra
export class CartPage {
    readonly page: Page
    // define construtor
    constructor(page: Page) {
        this.page = page
    }

    checkAddedMovie(page: Page, movie: string) {
        // verifica se o filme adicionado esta presente no carrinho
        return page.getByText(movie)
    }
    productText(page: Page) {
        // busca pelo texto abaixo na pagina
        return page.getByText('PRODUTO')
    }
    emptyCartMessage(page: Page) {
        // verifica mensagem de carrinho vazio
        return page.getByText("Parece que não há nada por aqui :(")
    }
    checkTotalValue(page: Page, value: string) {
        // verifica o total de pedido 
        return page.getByText(`R$ ${value}`).nth(2)
    }
    sucessOrderMessage(page: Page) {
        // verifica mensagem de pedido submetido
        return page.getByText('Compra realizada com sucesso!')
    }
    async decreaseMovie(page: Page, useBin: boolean) {
        if (useBin) {
            // clicara na lixeira se verdadeiro
            await page.locator('button.trash-btn').click()
        } else {
            // clicara no sinal de menos se falso
            await page.locator('svg[width="18"][height="18"]').nth(0).click()
        }
    }
    async increaseMovie(page: Page) {
        // clica no sinal de mais
        await page.locator('svg[width="18"][height="18"]').nth(1).click()
    }
    async buyMovies(page: Page) {
        // clica no botao de conclusao
        await page.getByRole('button', { name: 'Finalizar pedido' }).click()
    }
}
