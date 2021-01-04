import React, { useEffect, useRef } from 'react';

import { ModalHandles } from '@components/Modal';

import CreateChatIcon from './assets/chat.svg';
import LogOutIcon from './assets/log-out.svg';
import UserIcon from './assets/user.svg';
import CreateConversationModal from './CreateConversationModal';
import {
  Chat,
  Chats,
  Container,
  Divider,
  Header,
  LastMessage,
  LeftSide,
  Message,
  MessageInfo,
  MessageInput,
  MessagesContainer,
  MessageText,
  MessageUsername,
  RightSide,
  Row,
  SearchInput,
  UserInfo,
  Username,
} from './styles';

const Home: React.FC = () => {
  const modalRef = useRef<ModalHandles>(null);
  const text = 'this is a text\nand this is other text';

  useEffect(() => {
    modalRef.current.handleOpen();
  }, []);

  return (
    <>
      <CreateConversationModal ref={modalRef} />

      <Container onClick={() => modalRef.current.handleClose()}>
        <LeftSide>
          <Header>
            <UserIcon />
            <CreateChatIcon />
            <LogOutIcon />
          </Header>

          <SearchInput placeholder="Pesquise por uma conversa" />
          <Divider />

          <Chats>
            <Chat>
              <Row>
                <UserIcon />
                <UserInfo>
                  <Username>Destroyeer</Username>
                  <LastMessage>Ae se liga passar a visão</LastMessage>
                </UserInfo>
              </Row>

              <Divider />
            </Chat>
          </Chats>
        </LeftSide>

        <RightSide>
          <MessagesContainer>
            <Message>
              <UserIcon />
              <MessageInfo>
                <MessageUsername>Destroyeer</MessageUsername>
                <MessageText value={text} />
              </MessageInfo>
            </Message>
          </MessagesContainer>

          <MessageInput placeholder="Escreva sua mensagem" />
        </RightSide>
      </Container>
    </>
  );
};

export default Home;
