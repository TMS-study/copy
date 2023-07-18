import { Builder, By, WebDriver } from "selenium-webdriver"
import { TicketsPage } from "../pages/tickets.page";

describe("Test suite", () => {
    test.only("Check tickets search", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.aviasales.by/");

        const ticketsPage = new TicketsPage(driver);
        expect(await ticketsPage.getSearchButtonText()).toBe('Найти билеты');

        await driver.quit();
    })

    test.only("Check hotels search", async () => {
        let driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.aviasales.by/");

        const ticketsPage = new TicketsPage(driver);
        const hotelsPage = await ticketsPage.clickHotelsTab();
        expect(await hotelsPage.getSearchButtonText()).toBe('Найти отели');

        await driver.quit();
    })
})