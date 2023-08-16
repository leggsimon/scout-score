import { useReducer } from 'react';
import { Button } from './components/Button/Button';

const initialState = {
	players: [
		//   { id: 1, name: 'Player 1', scores: [] },
		//   { id: 2, name: 'Player 2', scores: [] },
		//   { id: 3, name: 'Player 3', scores: [] },
		//   { id: 4, name: 'Player 4', scores: [] },
		//   { id: 5, name: 'Player 5', scores: [] },
	],
};

type Player = {
	id: number;
	name: string;
	scores: number[];
};

type GameState = {
	players: Player[];
};

type GameAction =
	| {
			type: 'START_NEW_GAME';
			payload: {
				playerCount: number;
			};
	  }
	| {
			type: 'ADD_SCORE';
			payload: {
				playerId: number;
				score: number;
			};
	  }
	| {
			type: 'UPDATE_PLAYER_NAME';
			payload: {
				playerId: number;
				name: string;
			};
	  };

const reducer = (state: GameState, action: GameAction): GameState => {
	switch (action.type) {
		case 'START_NEW_GAME':
			const { playerCount } = action.payload;

			return {
				...state,
				players: Array.from({ length: playerCount }, (_, index) => ({
					id: index + 1,
					name: `Player ${index + 1}`,
					scores: [],
				})),
			};
		case 'ADD_SCORE':
			const { playerId, score } = action.payload;

			return {
				...state,
				players: state.players.map((player) => {
					if (player.id === playerId) {
						return {
							...player,
							scores: [...player.scores, score],
						};
					}

					return player;
				}),
			};
		// Add more cases for other actions if needed
		default:
			return state;
	}
};

export function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div
			style={{
				display: 'grid',
				alignContent: 'center',
				height: '100%',
				gap: '1rem',
				width: '80vw',
				margin: '0 auto',
			}}
		>
			<Button
				key='1PlayerButton'
				onClick={() => dispatch({ type: 'START_NEW_GAME', payload: { playerCount: 2 } })}
			>
				2 Player
			</Button>
			<Button
				key='2PlayerButton'
				onClick={() => dispatch({ type: 'START_NEW_GAME', payload: { playerCount: 3 } })}
			>
				3 Player
			</Button>
			<Button
				key='3PlayerButton'
				onClick={() => dispatch({ type: 'START_NEW_GAME', payload: { playerCount: 4 } })}
			>
				4 Player
			</Button>
			<Button
				key='4PlayerButton'
				onClick={() => dispatch({ type: 'START_NEW_GAME', payload: { playerCount: 5 } })}
			>
				5 Player
			</Button>
			{state.players.length}
		</div>
	);
}
