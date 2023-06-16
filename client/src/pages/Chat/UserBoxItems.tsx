function UserBoxItems() {
  return (
    <div className="messages-box">
      <div className="list-group rounded-0">
        <a className="list-group-item list-group-item-action active text-white rounded-0">
          <div className="media">
            <img
              src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
              alt="user"
              width="50"
              className="rounded-circle"
            />
            <div className="media-body ml-4">
              <div className="d-flex align-items-center justify-content-between mb-1">
                <h6 className="mb-0">Jason Doe</h6>
                <small className="small font-weight-bold">25 Dec</small>
              </div>
              <p className="font-italic mb-0 text-small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default UserBoxItems;
