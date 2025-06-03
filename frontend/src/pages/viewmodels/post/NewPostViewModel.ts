import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { newPostApi } from '@/pages/models/newPostModel';
import { newPostInterface } from '@/type/newPostInterface';

export function NewPostViewModel() {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const form = useForm<newPostInterface>({
    defaultValues: {
      title: '',
      content: '',
      tags: [],
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    form.setValue(e.target.name as any, e.target.value);
  };

  const onTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;
    const parts = value.split(/\s+/);

    if (parts.length > 1) {
      const newTags = parts.slice(0, -1).filter(tag => tag.length > 0);
      const updatedTags = Array.from(new Set([...tags, ...newTags]));
      setTags(updatedTags);
      form.setValue('tags',updatedTags);
      setInputValue(parts[parts.length - 1]);
    } else {
      setInputValue(value);
    }
  }

  const onSubmit = async (data: newPostInterface) => {
    try {
      // Handle post submission logic here
      await newPostApi(data);
      console.log('Post submitted:', data);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return { form, onChange, onSubmit, onTagInputChange, inputValue, tags};
}