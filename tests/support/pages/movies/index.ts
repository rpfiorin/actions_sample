import { Page } from "@playwright/test"

// POM da home
export class MoviesPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async addMovie(page: Page, movie: string) {
        await page.getByText('WeMovies').click()

        const title = page.locator(`div.sc-eqYatC:has(h3:has-text("${movie}"))`)
        await title.locator('button:has-text("Adicionar ao carrinho")').click()

        await page.getByText('Meu Carrinho').click()
    }
}
