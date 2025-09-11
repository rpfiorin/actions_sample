import { Page } from '@playwright/test'

// carrega .env, recebendo URL predefinida
require('dotenv').config()
const BASE_URL = process.env.BASE_URL

/**
    funcoes de ajuda para 
    reuso no projeto
 */
export async function visitWebMovies(page: Page) {
    await page.goto(`${BASE_URL}/`, { waitUntil: 'commit' })
}
export async function visitCart(page: Page) {
    await page.goto(`${BASE_URL}/cart`, { waitUntil: 'commit' })
}
export function newPrice(subtotal: number, amount: number) {
    const finalPrice = subtotal * amount
    const total = finalPrice.toString().replace('.', ',');

    return total
}
