import { FC, useEffect, useRef } from 'react';
import fromReactToWebComponentProps from '../../../utils/ds-utils';


export const Select: FC<PichinchaSelectHTMLAttributes> = ({ clickedItem, ...rest }) => {
    const propsToPass = fromReactToWebComponentProps(rest);
    const selectRef = useRef<HTMLPichinchaSelectElement>();

    const handleOnChangeItem = () => {
        clickedItem?.();
    };

    useEffect(() => {
        const selectNode = selectRef.current;

        selectNode?.addEventListener('clickedItem', handleOnChangeItem);

        return () => {
            selectNode?.removeEventListener('clickedItem', handleOnChangeItem);
        };
    }, [selectRef]);

    return <pichincha-select {...propsToPass}></pichincha-select>;
};
