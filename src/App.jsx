import ImageViewer from "./scss/components/ImageViewer/ImageViewer"


const App = () => {
  return (
    <div className="App">

      <div className="viewer-wrapper">
        <h1 className="title">ছবি দেখবা?</h1>

        <ImageViewer />
      </div>

    </div>
  )
}

export default App