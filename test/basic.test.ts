import { MyCustomCard } from "../src/custom-element/my-custom-card";
import { ICardConfig } from "../src/types";

describe("Basic tests", () => {

    const cardTagName = "my-custom-card";

    afterEach(() => 
        Array
            .from(document.body.getElementsByTagName(cardTagName))
            .forEach(elem => elem.remove())
    );

    test("Header text rendered correctly", async () => {

        const myCard = await createCard({
            title: "This is my card"
        });

        expect(myCard.shadowRoot).toBeTruthy();

        const headerText = myCard.shadowRoot!.querySelector(".card-header .truncate")?.textContent?.trim();

        expect(headerText).toBe("This is my card");
    });

    const createCard = async (config: ICardConfig) => {
        const myCard = <MyCustomCard>document.createElement(cardTagName);
        myCard.setConfig(config);
        document.body.appendChild(myCard);

        await myCard.updateComplete;

        return myCard;
    }
})