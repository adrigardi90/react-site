import * as React from 'react';
import './input.scss';

interface Props {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (string) => void;
    mandatory?: boolean;
}

export const Input = (props: Props) => (
    <div className="custom-input">
        <label className="custom-input__label">
            {props.label} {
                props.mandatory && <span>*</span>
            }
            </label>
            <div className="custom-input__input">
                <input
                    name={props.name}
                    placeholder={props.placeholder}
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange} />
            </div>
           
        
    </div>
)