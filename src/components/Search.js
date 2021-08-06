function Search({ data, audioObj, handleLink }) {
  const handleAudio = async (e) => {
    audioObj.src = e.target.id
    audioObj.play()
  }

  // applies a bold class on hover
  const handleEnter = async (e) => {
    e.target.className = 'bold-text'
  }
  // removes a bold class on hover
  const handleLeave = async (e) => {
    e.target.className = ''
  }

  // returns sentences with each word wrapped in a span with onClicks
  const wordLinks = (text, isSentence) => {
    const texts = text.split(' ')

    // set first letter capital and end in full stop
    if (isSentence) {
      const firstWord = texts[0].split('')
      firstWord[0] = firstWord[0].toUpperCase()
      texts[0] = firstWord.join('')
      const lastWord = texts[texts.length - 1].split('')
      if (lastWord[lastWord.length - 1] !== '.') {
        lastWord.push('.')
        texts[texts.length - 1] = lastWord
      }
    }

    const linkedTexts = texts.map((word, index) => {
      return (
        <span key={index}><span onClick={handleLink} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>{word}</span> </span>
      )
    })
    return (linkedTexts)
  }


  return (
    <div className='container'>
      {data.map((item, index) => {
        return (
          <div key={index} className='box border'>
            <div className='main-word'>
              <h3 className='title big-word'>{wordLinks(item.word)}</h3>
              {item.phonetics && 
              item.phonetics.map((item, index) => {
                return (
                  <div key={index} className='phonetic'>
                    {item.text && <button id={item.audio} onClick={handleAudio}>{item.text}</button>}
                  </div>
                )
              })}
            </div>
            
            {item.meanings.map((mean, index) => {
              return (
                <div key={index}>
                  <h4 className='block subtitle' id='partOf'><i>{wordLinks(mean.partOfSpeech)}</i></h4>
                  {mean.definitions.map((def, index) => {
                    return (
                      <div key={index} className='box border no-shadow'>
                        {def.definition && <p><strong>Definition{(mean.definitions.length > 1) ? ` ${index + 1}` : ''}: </strong>{wordLinks(def.definition, true)}</p>}
                        {def.example && <p><strong>Example:</strong> {wordLinks(def.example, true)}</p>}
                        {def.synonyms && <p><strong>Synonyms:</strong> {wordLinks(def.synonyms.join(', '), true)}</p>}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Search