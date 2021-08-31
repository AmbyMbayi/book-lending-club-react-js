import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editMember, getMember } from '../../../actions/members'
import { Sidebar } from '../../layouts';

import "./editMember.css";


export class EditMember extends Component {

    state = {
        name: '',
        contact: ''
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getMember(id);
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { id } = this.props.match.params;
        const { history } = this.props;


        const memberObject = { ...this.state }
        this.props.editMember(id, memberObject)

        history.push(`/members/view/${id}`)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.member !== this.props.member && nextProps.member) {
            this.setState({
                name: nextProps.member.name,
                contact: nextProps.member.contact
            })
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { member } = this.props
        return member ? (
            < div className="page__container">
                <Sidebar />
                <div className="member__page">
                    <h2>Edit Member</h2>
                    <form action="" onSubmit={this.onSubmit} className="member__form">
                        <div className="member__form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.onInputChange} />
                        </div>
                        <div className="member__form-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" name="contact" value={this.state.contact} onChange={this.onInputChange} />
                        </div>
                        <button type="submit" className="member__button">save</button>
                    </form>
                </div>
            </div>

        ) : null
    }
}
const mapStateToProps = state => ({
    member: state.members.member,
})
export default connect(mapStateToProps, { editMember, getMember })(EditMember)