import axios from "axios";
import React from "react";
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const baseURL = 'https://api.jikan.moe/v4/manga';

export default function Animes() {
    const [post, setPost] = React.useState(null);
 
    React.useEffect(() => {
        axios.get(baseURL, {
          params: {
            genres: 26,
            sfw: true,
            start_date: 2015
          }
        }).then((response) => {
          console.log(response.data);
          setPost(response.data);
        });
    }, []);

    if (!post) return null;
    
    return(
      <Grid container spacing={3}>
        {post.data.map((e) => {
          return (
            <Grid item xs={4}> 
            <Grid container direction="column">
              <Grid item container>
                <Grid sm={2} />
                  <Grid xs={12} sm={8}>
                  <Card variant="outlined">
                    <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                        {e.title_japanese}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {e.title}
                    </Typography>
                    <Typography  color="textSecondary">
                        score:{e.score} out of 10
                    </Typography>
                    <Typography variant="body2" component="p">
                      {e.synopsis}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button
                    size="small"
                    href={e.url}
                    target='_blank'
                    rel='nonpenner noreferrer'
                    >Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid sm={2} />
              </Grid>
            </Grid>
          </Grid>
          );
        })}
      </Grid>
    );
  }