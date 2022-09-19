import axios from "axios";
import React from "react";
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "@material-ui/core";

const baseURL = 'https://api.jikan.moe/v4/anime';

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
      //親
      <Grid container direction="column">
        <Grid item container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Grid container spacing={2}>
            {post.data.map((e) => {
              return (
                //子
                <Grid item xs={12} sm={4}>    
                  <Card variant="outlined">
                    {e.trailer.embed_url !== null ?
                      <CardMedia
                            component="iframe"
                            image={e.trailer.embed_url + '?autoplay=0'}
                          />
                        :
                      null
                    }
                    <CardContent>
                      <Typography  color="textSecondary" gutterBottom>
                        {e.title_japanese}
                      </Typography>
                      <Link 
                      href={e.url}
                      target='_blank'
                      rel='nonpenner noreferrer'
                      >
                        <Typography variant="h5" component="h2">
                        {e.title}
                        </Typography>
                      </Link>
                      <Typography  color="textSecondary">
                        score:{e.score} out of 10
                      </Typography>
                      <Typography variant="body2" component="p">
                        {e.synopsis}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
            </Grid>
          </Grid>
          <Grid sm={2} />
        </Grid>
      </Grid>
    );
  }