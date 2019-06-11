import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';
import {
  Container,
  EpisodeList,
  Episode,
  Title,
  Author,
  PlayButton,
  PlayButtonText,
  PodcastDetails,
  Background,
  Cover,
  BackButton,
  PodcastTitle,
} from './styles';

const Podcast = ({ navigation }) => {
  const podcast = navigation.getParam('podcast');

  return (
    <Container>
      <EpisodeList
        ListHeaderComponent={() => (
          <PodcastDetails>
            <Background source={{ uri: podcast.cover }} blurRadius={5} />
            <Cover source={{ uri: podcast.cover }} />

            <BackButton onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" color="#fff" size={24} />
            </BackButton>
            <PodcastTitle>{podcast.title}</PodcastTitle>

            <PlayButton onPress={() => {}}>
              <PlayButtonText>PLAY</PlayButtonText>
            </PlayButton>
          </PodcastDetails>
        )}
        data={podcast.tracks}
        keyExtractor={episode => String(episode.id)}
        renderItem={({ item: episode }) => (
          <Episode>
            <Title>{episode.title}</Title>
            <Author>{episode.artist}</Author>
          </Episode>
        )}
      />
    </Container>
  );
};

export default withNavigation(Podcast);
