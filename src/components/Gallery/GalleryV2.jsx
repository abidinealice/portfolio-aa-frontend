import * as React from "react";
import Stack from "@mui/material/Stack";
import {
  GalleryContainer,
  GalleryProjectsBox,
  GalleryProjectsGrid,
  GalleryTxt,
  GalleryProjectsGridItem,
  GalleryTitle,
  GalleryModalBtn,
} from "../../styles/gallery";
import projects from "../../data/res/projects.json"
import { useLanguageContext } from "../../utils/Context/languageContext";

function GalleryV2() {
    //Translation
    const { t } = useLanguageContext();

    return (
        <GalleryContainer>
        <GalleryProjectsBox style={{ position: "relative", zIndex: "2" }}>
            <GalleryProjectsGrid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/*-------------------------------------------------------*/}
            {/*-------------------PROJECTS*/}
            {/*--------------------------------------------------------*/}

            {projects.map(({ id, title, cover, alt, description, link, tags }) => (
            <GalleryProjectsGridItem item xs={2} sm={4} md={4} key={id}>
            <GalleryTitle variant="h2">{title}</GalleryTitle>

            <img
                src={cover}
                alt={alt}
                style={{ width: "150px" }}
            />

            <Stack flexDirection="row" gap={2}>
                {tags.map((tags) => (
                <GalleryTxt key={tags.toString()}>{tags}</GalleryTxt>
                ))}
            </Stack>

            <GalleryModalBtn>
                {t("galleryBtn")}
                </GalleryModalBtn>
            </GalleryProjectsGridItem>
            ))}
            
            
            </GalleryProjectsGrid>
        </GalleryProjectsBox>
        </GalleryContainer>
  );
}

export default GalleryV2;
