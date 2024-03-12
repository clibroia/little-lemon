const CommentArea = () => {
    const divClassName="form-label-data";
    const areaId="res-comments";
    const labelText="Additional comments";
    const areaMaxLength="300";
    return(
        <div className={divClassName}>
            <label htmlFor={areaId}>
                {labelText}
            </label>
            <textarea
                id={areaId}
                maxLength={areaMaxLength}
            ></textarea>
        </div>
    );
}

export default CommentArea;