import * as React from 'react';
import './textarea.scss';

interface Props {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (string) => void;
    mandatory?: boolean;
}

export const Textarea = (props: Props) => (
    <div className="custom-textarea">

        <label className="custom-textarea__label">
            {props.label} {
                props.mandatory && <span>*</span>
            }
        </label>

        <div className="custom-textarea__input">
            <textarea
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </div>
    </div>
)