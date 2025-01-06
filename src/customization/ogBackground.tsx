interface OgBackgroundProps {
  subtitle: string;
}
export default function OgBackground({ subtitle }: OgBackgroundProps) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, lightgray 5%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 5%, transparent 0%)',
        backgroundSize: '100px 100px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 200,
        }}
      >
        👾
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          fontStyle: 'normal',
          color: 'black',
          marginTop: 30,
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b>me.slijeff.com</b>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 40,
          fontStyle: 'normal',
          color: 'black',
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
          opacity: 0.7,
        }}
      >
        <b>{subtitle}</b>
      </div>
    </div>
  );
}
