import { Builder, WebDriver } from "selenium-webdriver"
import { TicketsPage } from "../pages/tickets.page";

describe("Test suite", () => {
    test.only("Check tickets search", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();

        const ticketsPage = new TicketsPage(driver);
        await ticketsPage.open();
        expect(await ticketsPage.getSearchButtonText()).toBe('Найти билеты');
        await ticketsPage.close();
    })

    test.only("Check hotels search", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();

        const ticketsPage = new TicketsPage(driver);
        await ticketsPage.open();
        const hotelsPage = await ticketsPage.clickHotelsTab();
        expect(await hotelsPage.getSearchButtonText()).toBe('Найти отели');
        hotelsPage.close();
    })
})