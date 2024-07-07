import React from "react";
import { ProfessionalType } from "../../../types/professional/professional_type";
import { Avatar, Container, NormalText, Row, styles, Title } from "../../../utils/constants";

type Props = {
    item: ProfessionalType
}
export const CategoryListItem: React.FC<Props> = ({item}) => {
    return (
        <Row className="flex-row mt-2 items-center mb-2">
        <Avatar
          className="rounded-full w-12 h-12"
          source={{
            uri:
            item?.image ??
              'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
          }}
        />
        <Container style={styles.normalWidth}>
          <Title
            className="text-lg text-amber-500 ml-2 mt-1"
            style={styles.poppinsRegular}>
            {item?.name ?? 'Usuário jampa'}
          </Title>
          <NormalText
            className="text-md ml-3 text-neutral-600"
            style={styles.poppinsSemiBold}>
            {item?.speciality ?? 'email@jampaservices.com.br'}
          </NormalText>
        </Container>
      </Row>
    )
}