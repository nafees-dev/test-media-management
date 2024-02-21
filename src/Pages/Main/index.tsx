import { Grid, Divider, Box, Typography } from "@mui/material";
import { ContentChip, MainHeading, Questions, SubHeading, Wrapper } from "./style";
import { useEffect, useState } from "react";
import ContentSelector from "../../Components/ContentSelector";
import WordsRangeSelector from "../../Components/WordsRangeSelector";
import { searchData } from "../../Data/searchData";

const contentCategory = [ "Fun", "Education", "Sports", "News", "Investment", "Facts"]

const MainSection = () => {
  const [activeButton, setActiveButton] = useState<string>(contentCategory[0]);
  const [_searchData, setSeatchData] = useState<string[]>(searchData[activeButton]);

  const handleActive = (content: string) => {
    setActiveButton(content);
  };

  useEffect(() => {
    setSeatchData(searchData[activeButton]);
  }, [activeButton])

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12}>
          <MainHeading>Content type</MainHeading>
          <SubHeading>Choose a content type that best fits your needs.</SubHeading>
        </Grid>
        <Grid item xs={12}>
        <Divider sx={{ marginY: { xs: '1.8rem', sm: "2.5rem" }, backgroundColor: "#3A3940" }} />
        </Grid>
        <Grid sx={{ mb: '28px' }} item xs={12}>
          <Questions>What type of content are you creating?</Questions>
          <Box sx={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {contentCategory.map((content, index) => (
              <ContentChip activebutton={activeButton} content={content} onClick={() => handleActive(content)} key={index} label={content} />
            ))}
          </Box>
        </Grid>
        <Grid sx={{ mb: '28px' }} item container xs={12}>
          <Grid item xs={12}>
            <Questions>Which type of “{activeButton}” content do you want to create?</Questions>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ContentSelector label="Search" options={_searchData} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Questions>Set the number of words for output text.</Questions>
          <Box sx={{ mt: "15px", backgroundColor: '#09090D', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '12px', height: '3.3rem', px: 1 }}>
          <Typography sx={{ fontWeight: '500', fontSize: '0.875rem' }}>100</Typography>
            <WordsRangeSelector />
          <Typography sx={{ fontWeight: '500', fontSize: '0.875rem' }}>1000</Typography>
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default MainSection;
