import { Page } from "@playwright/test"

// POM do carrinho de compra
export class CartPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    checkAddedMovie(page: Page, movie: string) {
        return page.getByText(movie)
    }
    productText(page: Page) {
        return page.getByText('PRODUTO')
    }
    emptyCartMessage(page: Page) {
        return page.getByText("Parece que não há nada por aqui :(")
    }
    checkTotalValue(page: Page, value: string) {
        return page.getByText(`R$ ${value}`).nth(2)
    }
    sucessOrderMessage(page: Page) {
        return page.getByText('Compra realizada com sucesso!')
    }
    async decreaseMovie(page: Page, useBin: boolean) {
        if (useBin) {
            // clicara na lixeira
            await page.locator('button.trash-btn').click()
        } else {
            // clicara no sinal de menos
            await page.locator('svg[width="18"][height="18"]').nth(0).click()
        }
    }
    async increaseMovie(page: Page) {
        await page.locator('svg[width="18"][height="18"]').nth(1).click()
    }
    async buyMovies(page: Page) {
        await page.getByRole('button', { name: 'Finalizar pedido' }).click()
    }
}
