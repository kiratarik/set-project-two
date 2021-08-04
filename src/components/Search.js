import React from 'react'
import { getWord } from '../lib/api'


function Search() {
  const [data, setData] = React.useState(undefined)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getWord('dictionary')
        setData(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleChange = async (e) => {
    let search = e.target.value
    if (search === '') {
      search = 'dictionary'
    }

    try {
      const response = await getWord(search)
      setData(response.data)
    } catch (err) {
      console.log(err)
    }
    
  }

  return (
    <section className='section'>
      <div className='container'>
        <h1>Search Page</h1>
        <input className='input' placeholder='Search Word Definitions' onChange={handleChange}></input>
        {data && 
          <div className='container'>
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <hr />
                  <h3>{item.word}</h3>
                  {item.phonetics && 
                  item.phonetics.map((item, index) => {
                    return (
                      <div key={index}>
                        {item.text && <h3>{item.text}</h3>}
                      </div>
                    )
                  })}
                  {item.meanings.map((item, index) => {
                    return (
                      <div key={index}>
                        <h4>{item.partOfSpeech}</h4>
                        {item.definitions.map((item, index) => {
                          return (
                            <div key={index}>
                              {item.definition && <p><strong>Definition {index + 1}: </strong>{item.definition}</p>}
                              {item.example && <p><strong>Example:</strong> {item.example}</p>}
                              {item.synonyms && <p><strong>Synonyms:</strong> {item.synonyms.join(', ')}</p>}
                              <hr />
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
        }
      </div>
    </section>
    
    
  )
}

export default Search