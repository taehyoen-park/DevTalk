import { NewPostForm } from './NewPostForm';
import { NewPostViewModel } from './NewPostViewModel';

export default function NewPostPage() {

  const newPostviewModel = NewPostViewModel();
  return (
    <NewPostForm viewModel={newPostviewModel} />
  );
}