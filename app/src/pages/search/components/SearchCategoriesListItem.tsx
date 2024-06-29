import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { CategoryType } from "../../../types/category/category_type";
import { CategoryNavigationType } from "../../../types/navigation/navigation_type";
import { Container, Title, styles } from "../../../utils/constants";

type Props = {
    category : CategoryType | null
};

export const SearchCategoriesListItem: React.FC<Props> = ({category}) => {

    const navigation = useNavigation<NativeStackNavigationProp<CategoryNavigationType>>();

    const handleNavigation = () => {
        navigation.navigate('Categories',{ category: category ?? undefined });
    };

    return (
        <Pressable onPress={handleNavigation}>
            <Container className="h-32 bg-neutral-300 rounded-md justify-around items-center mb-4" style={styles.categoryItemWidth}>
                <Title>{category?.name}</Title>
            </Container>
        </Pressable>
    )

};