import { Button } from './components/Button/Button';

export function App() {
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
			<Button key='1PlayerButton'>2 Player</Button>
			<Button key='2PlayerButton'>3 Player</Button>
			<Button key='3PlayerButton'>4 Player</Button>
			<Button key='4PlayerButton'>5 Player</Button>
		</div>
	);
}
