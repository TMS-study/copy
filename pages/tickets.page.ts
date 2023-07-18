import { By, WebDriver } from "selenium-webdriver";
import { HotelsPage } from "./hotel.page";
import { BasePage } from "./base.page";

export class TicketsPage extends BasePage {
    private readonly searchButton: By = By.xpath("//form[@class='avia-form --home']//button[@type='submit']");
    private readonly hotelsTab: By = By.xpath("//a[@data-goal='hotelTab']");

    async getSearchButtonText(): Promise<string> {
        let el = await this.driver.findElement(this.searchButton);
        return await el.getText();
    }

    async clickHotelsTab(): Promise<void> {
        let el = await this.driver.findElement(this.hotelsTab);
        await el.click();
    }
}