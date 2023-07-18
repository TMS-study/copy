import { WebDriver } from "selenium-webdriver";
import { HotelsPage } from "./hotel.page";
import { TicketsPage } from "./tickets.page";

export class PagesFactory {
    static getPage(driver: WebDriver, pageName: string) {
        switch (pageName) {
            case 'hotel':
                return new HotelsPage(driver);
            case 'tickets':
                return new TicketsPage(driver);
            default:
                return new TicketsPage(driver);
        }
    }
}