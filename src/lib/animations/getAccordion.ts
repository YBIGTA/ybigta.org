export const getAccordion = (defaultHeight: string) => {
	function accordion(node: HTMLElement, isOpen: boolean) {
		const initialHeight = node.offsetHeight;
		node.style.height = isOpen ? 'auto' : defaultHeight;
		node.style.overflow = 'hidden';
		return {
			update(isOpen: boolean) {
				const animation = node.animate(
					[
						{
							height: initialHeight + 'px',
							overflow: 'hidden'
						},
						{
							height: defaultHeight,
							overflow: 'hidden'
						}
					],
					{ duration: 100, fill: 'both' }
				);
				animation.pause();
				if (!isOpen) {
					animation.play();
				} else {
					animation.reverse();
				}
			}
		};
	}

	return accordion;
};
