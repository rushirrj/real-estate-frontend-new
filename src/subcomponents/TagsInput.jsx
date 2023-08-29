import React, {useState, useEffect} from 'react';
function TagsInput({ setInputs, inputs, edit }){
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(false);
    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        setInputs({...inputs, tags: [...tags, value]})
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
        setInputs({...inputs, tags: tags.filter((el, i) => i !== index)})
    }
    useEffect(() => {
        if(edit){
            setTags(inputs.tags);
            setLoading(true);
        }else{
            setLoading(true);
        }
    }, [])
    return (
        loading &&
        <div className="tags-input-container w-full  px-3 my-5">
        <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Tags  
            </label>
            <input onKeyDown={handleKeyDown} type="text" className="tags-input appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Press Enter" />
            { tags.map((tag, index) => (
                <div className="tag-item  hover:bg-blue-100 font-bold py-2 px-4 rounded mb-4" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close cursor-pointer pl-5" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
        </div>
    )
}

export default TagsInput