'use client';

import { useEffect, useState } from 'react';

import styles from './Cursor.module.css';

export default function Cursor() {
	const [visible, setVisible] = useState(false);
	const [interactive, setInteractive] = useState(false);

	useEffect(() => {
		const finePointer = window.matchMedia('(pointer: fine)').matches;

		if (!finePointer) {
			return;
		}

		document.documentElement.classList.add('custom-cursor-enabled');

		let animationFrame = 0;

		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;

			cancelAnimationFrame(animationFrame);

			animationFrame = requestAnimationFrame(() => {
				document.documentElement.style.setProperty(
					'--cursor-x',
					`${clientX}px`
				);

				document.documentElement.style.setProperty(
					'--cursor-y',
					`${clientY}px`
				);
			});

			setVisible(true);
		};

		const handleMouseOver = (event: MouseEvent) => {
			const target = event.target as HTMLElement | null;

			if (!target) {
				return;
			}

			const isInteractive = Boolean(
				target.closest(
					'a, button, input, textarea, select, option, label, [role="button"], [tabindex]'
				)
			);

			setInteractive(isInteractive);
		};

		const handleMouseLeave = () => {
			setVisible(false);
		};

		const handleMouseEnter = () => {
			setVisible(true);
		};

		window.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseover', handleMouseOver);
		document.addEventListener('mouseleave', handleMouseLeave);
		document.addEventListener('mouseenter', handleMouseEnter);

		return () => {
			cancelAnimationFrame(animationFrame);

			document.documentElement.classList.remove(
				'custom-cursor-enabled'
			);

			document.documentElement.style.removeProperty('--cursor-x');
			document.documentElement.style.removeProperty('--cursor-y');

			window.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseover', handleMouseOver);
			document.removeEventListener('mouseleave', handleMouseLeave);
			document.removeEventListener('mouseenter', handleMouseEnter);
		};
	}, []);

	return (
		<div
			className={`${styles.cursor} ${visible ? styles.visible : ''
				} ${interactive ? styles.interactive : ''}`}
			aria-hidden="true"
		>
			<span className={styles.dot} />
		</div>
	);
}
