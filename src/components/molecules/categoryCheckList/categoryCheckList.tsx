import { FC } from "react";
import { Container } from "react-bootstrap";
import { CheckBox } from "../../atoms/checkbox/checkbox";
import { Typography } from "../../atoms/typography/typography";

interface Cat {
    categoryList: any[];
    validCategories: boolean;
    handleCategoryChecked: (e: any) => void;
}

export const CategoryCheckBoxList: FC<Cat> = ({ categoryList, handleCategoryChecked, validCategories }) => {

    return (
        <>
            <Container className="category-contanier" fluid>
                {categoryList.map(({ id, description }) => {
                    return (
                        <div key={id} onClick={handleCategoryChecked}><CheckBox nameElement='category' value={id.toString()}>{description}</CheckBox></div>
                    );
                })}
            </Container>
            {!validCategories ? <Typography color="danger" align="left" variant="legalText">Debe seleccionar al menos 3 categorias</Typography> : ''}
        </>
    );
};
