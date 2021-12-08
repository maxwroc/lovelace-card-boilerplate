import { HomeAssistant } from "../ha-types";
import { html, css, LitElement } from "lit";
import { ICardConfig } from "../types";
import styles from "./card.css";

/**
 * Main card class definition
 */
export class MyCustomCard extends LitElement {

    private cardTitle: string = "Card header";

    /**
     * CSS for the card
     */
    static get styles() {
        return css(<TemplateStringsArray><any>[styles]);
    }

    /**
     * List of properties which trigger update when changed
     */
    static get properties() {
        return {
            cardTitle: { type: String },
        };
    }

    /**
     * Called on every hass update
     */
    set hass(hass: HomeAssistant) {
    }

    /**
     * Called every time when entity config is updated
     * @param config Card configuration (yaml converted to JSON)
     */
    setConfig(config: ICardConfig) {
        this.cardTitle = config.title;
    }

    /**
     * Renders the card when the update is requested (when any of the properties are changed)
     */
    render() {
        return html`
        <ha-card>
            <div class="card-header">
                <div class="truncate">
                    ${this.cardTitle}
                </div>
            </div>
            <div class="card-content">
                <div>
                    <div class="entity-row">
                        <div class="icon">
                            <ha-icon
                                style="color: yellow"
                                icon="mdi:lightbulb"
                            ></ha-icon>
                        </div>
                        <div class="name truncate">
                            Entity name
                            <div class="secondary">Secondary info</div>
                        </div>
                        <div class="state">
                            State
                        </div>
                    <div>
                </div>
            </div>
        </ha-card>
        `;
    }
}