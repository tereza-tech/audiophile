import { Container, Grid, useMediaQuery } from "@mui/material";
import { CategoryLink as CategoryLinkType } from "../../lib/types";
import CategoryLink from "./CategoryLink";

const CategoryLinks = () => {
  const isTablet = useMediaQuery("(min-width: 900px)");

  const CATEGORIES: CategoryLinkType[] = [
    {
      /*
        Vykreslená velikost:	167 × 167 px
        Vykreslený poměr stran:	1∶1
        Vnitřní velikost:	256 × 256 px
      */
      category: "projectors",
      href: "/projectors",
      image: {
        src: "/assets/shared/desktop/image-projectors.png",
        width: isTablet ? "190px" : "120px",
        height: isTablet ? "174px" : "104px",
      },
    },
    {
      /*
        Vykreslená velikost:	156 × 156 px
        Vykreslený poměr stran:	1∶1
        Vnitřní velikost:	256 × 256 px
      */
      category: "invisibass",
      href: "/invisibass",
      image: {
        src: "/assets/shared/desktop/image-invisibass.png",
        width: isTablet ? "175px" : "120px",
        height: isTablet ? "175px" : "104px",
      },
    },
    {
      /*
        Vykreslená velikost:	102 × 168 px
        Vykreslený poměr stran:	17∶28
        Vnitřní velikost:	256 × 421 px
      */
      category: "designspeakers",
      href: "/designspeakers",
      image: {
        src: "/assets/shared/desktop/image-design-speakers.png",       
        width: isTablet ? "110px" : "120px",
        height: isTablet ? "179px" : "104px",
      },
    },
    {
      /*
        Vykreslená velikost:	118 × 138 px
        Vykreslený poměr stran:	59∶69
        Vnitřní velikost:	128 × 149 px
      */
      category: "rti",
      href: "/rti",
      image: {
        src: "/assets/shared/desktop/image-rti-lower.png",
        width: isTablet ? "121px" : "120px",
        height: isTablet ? "153px" : "104px",
      },
    },
    {
      /*
        Vykreslená velikost:	151 × 151 px
        Vykreslený poměr stran:	1∶1
        Vnitřní velikost:	256 × 256 px
      */
      category: "subwoofers",
      href: "/subwoofers",
      image: {
        src: "/assets/shared/desktop/image-subwoofers.png",
        width: isTablet ? "162px" : "120px",
        height: isTablet ? "162px" : "104px",
      },
    },
    {
      /*
        Vykreslená velikost:	126 × 147 px
        Vykreslený poměr stran:	6∶7
        Vnitřní velikost:	256 × 299 px
      */
      category: "speakers",
      href: "/speakers",
      image: {
        src: "/assets/shared/desktop/image-speakers.png",
        width: isTablet ? "126px" : "100px",
        height: isTablet ? "147px" : "101px",
      },
    },
  ];
return (
  <Container>
    <Grid container columnSpacing={{ sm: 3 }}>
      {CATEGORIES.map((category) => (
        <Grid item key={category.category} xs={12} sm={4} minHeight="200px">
          <CategoryLink category={category} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
};

export default CategoryLinks;
