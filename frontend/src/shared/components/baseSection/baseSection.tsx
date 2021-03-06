import React from 'react';
import {LanguageContext, LanguageContextValue} from "../../../components/languageSwitch/languageContext";
import DisplayedLanguage from "../../../models/language";
import './baseSection.css'

export interface BaseSectionProps<T> {
    data: T[]
}

export interface BaseSectionState {

}

export default abstract class BaseSection<T> extends React.Component<BaseSectionProps<T>, BaseSectionState> {
    protected constructor(props: BaseSectionProps<T>) {
        super(props);
    }

    abstract renderCard(object: T, cardStyleNum: number, language: DisplayedLanguage, id: number): JSX.Element

    render(): JSX.Element {
        return (
            <LanguageContext.Consumer>
                {(value: LanguageContextValue) => {
                    const {language} = value;
                    return (
                        <div className="base-section">
                            {this.props.data.map((object: T, idx: number) => {
                                    return this.renderCard(object, idx % 3, language, idx)
                                }
                            )}
                        </div>
                    );
                }}
            </LanguageContext.Consumer>
        )
    }
}
