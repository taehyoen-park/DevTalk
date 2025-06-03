import { NewPostForm } from '../views/post/NewPostForm';
import { NewPostViewModel } from '../viewmodels/post/NewPostViewModel';

export default function NewPostPage() {

  const newPostviewModel = NewPostViewModel();
  return (
    <div className="space-y-4 min-h-screen max-w-2xl mx-auto p-4 pt-32">
      <NewPostForm viewModel={newPostviewModel} />
    </div>
  );
}