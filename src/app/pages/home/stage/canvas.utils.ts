export function drawImages(context: CanvasRenderingContext2D, images: HTMLImageElement[]): void {
  images.forEach((htmlImageElement) => {
    drawImage(context, htmlImageElement);
  });
}

function drawImage(context: CanvasRenderingContext2D, image: HTMLImageElement): void {
  const halfFactor = 2;
  const dx = context.canvas.width / halfFactor - image.width / halfFactor;
  const dy = context.canvas.height / halfFactor - image.height / halfFactor;

  context.strokeStyle = 'black';
  const lineWidth = 2;
  context.lineWidth = lineWidth;
  context.strokeRect(dx, dy, image.width, image.height);
  context.drawImage(image, dx, dy);
}

export function isSelection(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
): boolean {
  const canvasRect = context.canvas.getBoundingClientRect();
  const halfFactor = 2;
  const imageRect = {
    x: canvasRect.x + image.width / halfFactor,
    y: canvasRect.y + image.height / halfFactor,
    width: image.width,
    height: image.height,
  };

  return (
    x >= imageRect.x &&
    x <= imageRect.x + imageRect.width &&
    y >= imageRect.y &&
    y <= imageRect.y + imageRect.height
  );
}
