import { Pressable } from "react-native";
import { CategoryType } from "../../../types/category/category_type";
import { Container, Title, styles } from "../../../utils/constants";

type Props = {
    category : CategoryType | null
};

export const SearchCategoriesListItem: React.FC<Props> = ({category}) => {

    return (
        <Pressable>
            <Container className="h-28 bg-neutral-400 rounded-md justify-around items-center mb-4" style={styles.categoryItemWidth}>
                <Title>{category?.name}</Title>
            </Container>
        </Pressable>
    )

};