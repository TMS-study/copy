import { By, WebDriver } from "selenium-webdriver";

export class HotelsPage {
    private readonly searchButton: By = By.xpath("//form[@class='hotel-form --home']//button[@type='submit']");

    constructor(private driver: WebDriver) {
    }

    async getSearchButtonText(): Promise<string> {
        let el = await this.driver.findElement(this.searchButton);
        return await el.getText();
    }
}