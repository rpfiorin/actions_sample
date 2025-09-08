import { Page } from "@playwright/test"

// POM da home
export class MoviesPage {
    readonly page: Page
    // define construtor
    constructor(page: Page) {
        this.page = page
    }

    async addMovie(page: Page, movie: string) {
        // garante que estara na pagina inicial
        await page.getByText('WeMovies').click()

        // localiza elemento do respectivo filme definido na massa de teste
        const title = page.locator(`div.sc-eqYatC:has(h3:has-text("${movie}"))`)
        await title.locator('button:has-text("Adicionar ao carrinho")').click()

        // redireciona ao carrinho apos adicionar filme
        await page.getByText('Meu Carrinho').click()
    }
}
