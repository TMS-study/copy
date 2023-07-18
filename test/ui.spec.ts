import { Builder, WebDriver } from "selenium-webdriver"
import { TicketsPage } from "../pages/tickets.page";
import { PagesFactory } from "../pages/pages.factory";

describe("Test suite", () => {
    test.only("Check tickets search", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();

        const ticketsPage = PagesFactory.getPage(driver, 'tickets');
        await ticketsPage.open();
        expect(await ticketsPage.getSearchButtonText()).toBe('Найти билеты');
        await ticketsPage.close();
    })

    test.only("Check hotels search", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();

        const ticketsPage = PagesFactory.getPage(driver, 'tickets') as TicketsPage;
        await ticketsPage.open();
        await ticketsPage.clickHotelsTab();
        const hotelsPage = PagesFactory.getPage(driver, 'hotel');
        expect(await hotelsPage.getSearchButtonText()).toBe('Найти отели');
        hotelsPage.close();
    })
})