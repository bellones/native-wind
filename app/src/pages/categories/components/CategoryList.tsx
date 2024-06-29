import { ProfessionalType } from "../../../types/professional/professional_type";
import { List } from "../../../utils/constants";

type Props = {
    professionals: ProfessionalType[] | undefined;
}

export const CategoryList: React.FC<Props> = ({professionals}) => {
    return (
        <List
            scrollEnabled={false} data={undefined} renderItem={undefined}
        />
    )
}