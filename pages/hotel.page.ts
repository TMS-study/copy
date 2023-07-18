import { By } from "selenium-webdriver";
import { BasePage } from "./base.page";

export class HotelsPage extends BasePage {
    private readonly searchButton: By = By.xpath("//form[@class='hotel-form --home']//button[@type='submit']");

    async getSearchButtonText(): Promise<string> {
        let el = await this.driver.findElement(this.searchButton);
        return await el.getText();
    }
}