export function Banner({ src }: { src: string }) {
  return (
    <div class="banner" role="banner">
      <img src={src} alt="Project banner" />
    </div>
  );
}
