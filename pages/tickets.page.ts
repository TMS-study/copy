import { By, WebDriver } from "selenium-webdriver";
import { HotelsPage } from "./hotel.page";

export class TicketsPage {
    private readonly searchButton: By = By.xpath("//form[@class='avia-form --home']//button[@type='submit']");
    private readonly hotelsTab: By = By.xpath("//a[@data-goal='hotelTab']");

    constructor(private driver: WebDriver) {
    }

    async getSearchButtonText(): Promise<string> {
        let el = await this.driver.findElement(this.searchButton);
        return await el.getText();
    }

    async clickHotelsTab(): Promise<HotelsPage> {
        let el = await this.driver.findElement(this.hotelsTab);
        await el.click();
        return new HotelsPage(this.driver);
    }
}