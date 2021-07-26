import '../css/style.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './HomePage';
import Chat from './Chat';
import Chats from './Chats';

export default function Router(props) {
	return (
		<Switch>
			<Route
				path="/"
				exact
				render={() => (
					<HomePage
						chats={props.chats}
						currentChat={props.currentChat}
						ChangeChat={props.ChangeChat}
					/>
				)}
			/>
			<Route
				exact
				path="/chats"
				render={() => (
					<Chats
						chats={props.chats}
						currentChat={props.currentChat}
						ChangeChat={props.ChangeChat}
						getIsChatExists={props.getIsChatExists}
					/>
				)}
			/>
			<Route
				path="/chats/:chatId"
				render={() => {
					return <Chat getIsChatExists={props.getIsChatExists} />
				}}
			/>
			<Route path="/profile">
				<p>Profile page</p>
			</Route>
			<Route>
				<p>404: not found</p>
			</Route>
		</Switch>
	)
}