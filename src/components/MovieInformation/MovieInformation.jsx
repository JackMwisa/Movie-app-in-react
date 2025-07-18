import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useFetchMovieDetailsQuery,
  useFetchMovieVideosQuery,
  useFetchMovieCreditsQuery,
  useFetchRecommendedMoviesQuery,
} from '../../services/TMDB';

import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Chip,
  Rating,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  RootContainer,
  BackButtonContainer,
  PosterImage,
  GenreChipContainer,
  TrailerWrapper,
  TrailerFrame,
  ActorCard,
  StyledCardMedia,
  StyledCardContent,
  RecommendedCard,
  RecommendedCardMedia,
  RecommendedCardContent,
  StyledLinkCard,
} from './MovieInformationStyle';

const MovieInformation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useFetchMovieDetailsQuery(id);
  const { data: videos } = useFetchMovieVideosQuery(id);
  const { data: credits } = useFetchMovieCreditsQuery(id);
  const { data: recommendations } = useFetchRecommendedMoviesQuery(id);

  if (isLoading || !data) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  const trailer = videos?.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );

  const cast = credits?.cast?.slice(0, 6);
  const crew = credits?.crew?.filter((member) =>
    ['Director', 'Writer'].includes(member.job)
  );

  return (
    <RootContainer>
      {/* Back Button */}
      <BackButtonContainer>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          variant="outlined"
        >
          Back
        </Button>
      </BackButtonContainer>

      {/* Movie Poster & Info */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <PosterImage
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                : 'https://via.placeholder.com/300x450?text=No+Image'
            }
            alt={data.title}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight={600}>
            {data.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {data.tagline}
          </Typography>

          <Box display="flex" alignItems="center" gap={1} my={2}>
            <Rating value={data.vote_average / 2} precision={0.5} readOnly />
            <Typography>({data.vote_average.toFixed(1)})</Typography>
            <Typography variant="body2" ml={2}>
              {data.release_date}
            </Typography>
          </Box>

          <Typography paragraph>{data.overview}</Typography>

          {/* Genre Chips with navigation */}
          <GenreChipContainer>
            {data.genres.map((genre) => (
              <Chip
                key={genre.id}
                label={genre.name}
                color="primary"
                clickable
                onClick={() =>
                  navigate(`/genre/${encodeURIComponent(genre.name.toLowerCase())}`)
                }
              />
            ))}
          </GenreChipContainer>
        </Grid>
      </Grid>

      {/* Trailer Section */}
      {trailer && (
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Trailer
          </Typography>
          <TrailerWrapper>
            <TrailerFrame
              src={`https://www.youtube.com/embed/${trailer.key}`}
              allowFullScreen
              title="Movie Trailer"
            />
          </TrailerWrapper>
        </Box>
      )}

      {/* Cast Section */}
      {cast?.length > 0 && (
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Cast
          </Typography>
          <Grid container spacing={2}>
            {cast.map((actor) => (
              <Grid item xs={6} md={2} key={actor.id}>
                <ActorCard>
                  <StyledCardMedia
                    component="img"
                    image={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : 'https://via.placeholder.com/185x278?text=No+Image'
                    }
                    alt={actor.name}
                  />
                  <StyledCardContent>
                    <Typography variant="body2" fontWeight={600} noWrap>
                      {actor.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" noWrap>
                      as {actor.character}
                    </Typography>
                  </StyledCardContent>
                </ActorCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Crew Section */}
      {crew?.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Crew
          </Typography>
          {crew.map((member) => (
            <Typography key={member.id} variant="body2">
              {member.name} – {member.job}
            </Typography>
          ))}
        </Box>
      )}

      {/* Recommended Movies */}
      {recommendations?.results?.length > 0 && (
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Recommended
          </Typography>
          <Grid container spacing={2}>
            {recommendations.results.slice(0, 6).map((movie) => (
              <Grid item xs={6} sm={4} md={2} key={movie.id}>
                <StyledLinkCard to={`/movies/${movie.id}`}>
                  <RecommendedCard>
                    <RecommendedCardMedia
                      component="img"
                      image={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                          : 'https://via.placeholder.com/200x300?text=No+Image'
                      }
                    />
                    <RecommendedCardContent>
                      <Typography variant="body2" noWrap>
                        {movie.title}
                      </Typography>
                    </RecommendedCardContent>
                  </RecommendedCard>
                </StyledLinkCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </RootContainer>
  );
};

export default MovieInformation;
